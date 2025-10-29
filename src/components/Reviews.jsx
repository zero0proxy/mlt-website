// src/components/Reviews.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 1. Импортируем нашу базу (db) и функции для работы с ней
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

// Компонент для отображения Звезд (мы создадим его прямо здесь)
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-6 h-6 ${i <= rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.096 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};


// === Главный компонент Reviews ===
const Reviews = () => {
  const [reviews, setReviews] = useState([]); // Список отзывов
  const [loading, setLoading] = useState(true); // Статус загрузки
  
  // Состояния для формы
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false); // Статус отправки
  const [error, setError] = useState('');

  // 2. Функция для ЗАГРУЗКИ отзывов
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        // Создаем запрос к коллекции 'reviews', сортируем по дате (сначала новые)
        const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
        
        const querySnapshot = await getDocs(q);
        const reviewsData = [];
        querySnapshot.forEach((doc) => {
          reviewsData.push({ id: doc.id, ...doc.data() });
        });
        
        setReviews(reviewsData);
      } catch (err) {
        console.error("Error fetching reviews: ", err);
        setError("Не удалось загрузить отзывы.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []); // Пустой массив зависимостей = запустить 1 раз при загрузке

  // 3. Функция для ОТПРАВКИ отзыва
  const handleSubmit = async (e) => {
    e.preventDefault(); // Не даем странице перезагрузиться
    if (author === '' || text === '' || rating === 0) {
      setError("Пожалуйста, заполните все поля и выберите рейтинг.");
      return;
    }
    
    setSubmitting(true);
    setError('');

    try {
      // Добавляем новый документ в коллекцию 'reviews'
      const docRef = await addDoc(collection(db, "reviews"), {
        author: author,
        text: text,
        rating: rating,
        createdAt: Timestamp.now() // Добавляем метку времени
      });

      // Обновляем список отзывов на лету
      setReviews([{ id: docRef.id, author, text, rating, createdAt: Timestamp.now() }, ...reviews]);
      
      // Очищаем форму
      setAuthor('');
      setText('');
      setRating(0);

    } catch (err) {
      console.error("Error adding review: ", err);
      setError("Ошибка при отправке отзыва. Попробуйте позже.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Отзывы наших клиентов
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* === КОЛОНКА 1: ФОРМА ОТПРАВКИ === */}
        <motion.div 
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Оставить отзыв</h3>
          <form onSubmit={handleSubmit}>
            {/* Имя */}
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-300 mb-2">Ваше имя</label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            {/* Рейтинг (Звезды) */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Ваша оценка</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button" // Важно, чтобы не отправлять форму
                    key={star}
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <svg
                      className={`w-8 h-8 ${rating >= star ? 'text-yellow-400' : 'text-gray-600 hover:text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.096 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Текст отзыва */}
            <div className="mb-6">
              <label htmlFor="text" className="block text-gray-300 mb-2">Отзыв</label>
              <textarea
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={4}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            
            {/* Ошибка (если есть) */}
            {error && <p className="text-red-400 mb-4">{error}</p>}

            {/* Кнопка отправки */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:bg-gray-500"
            >
              {submitting ? 'Отправка...' : 'Отправить отзыв'}
            </button>
          </form>
        </motion.div>

        {/* === КОЛОНКА 2: СПИСОК ОТЗЫВОВ === */}
        <div className="h-[600px] overflow-y-auto pr-4"> {/* Ограничиваем высоту и добавляем скролл */}
          {loading && <p className="text-white text-center">Загрузка отзывов...</p>}
          
          {!loading && reviews.length === 0 && (
            <p className="text-gray-400 text-center">
              Отзывов пока нет. Станьте первым!
            </p>
          )}

          {!loading && reviews.length > 0 && (
            <div className="space-y-6">
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/10"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-white">{review.author}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-gray-300">{review.text}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Reviews;