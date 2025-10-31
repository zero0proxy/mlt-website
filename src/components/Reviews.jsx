// src/components/Reviews.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

// 1. Импортируем 'useTranslation'
import { useTranslation } from 'react-i18next';

// Компонент Звезд (без изменений)
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
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};

// === Главный компонент Reviews ===
const Reviews = () => {
  // 2. Получаем 't'
  const { t } = useTranslation();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  // (useEffect без изменений)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const reviewsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReviews(reviewsData);
      } catch (err) {
        console.error("Error fetching reviews: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // (handleSubmit обновлен с 't()')
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 3. Переводим текст ошибки
    if (!author.trim() || !text.trim() || rating === 0) {
      setError(t('reviews.error_fill_fields'));
      return;
    }
    
    setSubmitting(true);
    setError('');

    try {
      const newReview = {
        author,
        text,
        rating,
        createdAt: Timestamp.now()
      };
      const docRef = await addDoc(collection(db, "reviews"), newReview);
      
      // Мгновенно обновляем UI
      setReviews([{ id: docRef.id, ...newReview }, ...reviews]);
      setAuthor('');
      setText('');
      setRating(0);

    } catch (err) {
      console.error("Error adding review: ", err);
      setError("Error submitting review. Please try again."); // (Можно тоже добавить в JSON)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // (Твои стили сохранены)
    <div className="py-24 px-6 max-w-6xl mx-auto">
      {/* 4. Переводим заголовок */}
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        {t('reviews.title')}
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        
        {/* === КОЛОНКА 1: ФОРМА === */}
        <motion.div 
          className="bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: -50 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          {/* 5. Переводим все в форме */}
          <h3 className="text-2xl font-semibold text-white mb-6">{t('reviews.form_title')}</h3>
          <form onSubmit={handleSubmit}>
            {/* Имя */}
            <div className="mb-4">
              <label htmlFor="author" className="block text-gray-300 mb-2">{t('reviews.label_name')}</label>
              <input
                type="text" id="author" value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {/* Рейтинг */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">{t('reviews.label_rating')}</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button type="button" key={star} onClick={() => setRating(star)} className="focus:outline-none">
                    <svg
                      className={`w-8 h-8 ${rating >= star ? 'text-yellow-400' : 'text-gray-600 hover:text-gray-400'}`}
                      fill="currentColor" viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Текст отзыва */}
            <div className="mb-6">
              <label htmlFor="text" className="block text-gray-300 mb-2">{t('reviews.label_review')}</label>
              <textarea
                id="text" value={text} onChange={(e) => setText(e.target.value)} rows={4}
                className="w-full bg-white/10 text-white p-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            {error && <p className="text-red-400 mb-4">{error}</p>}

            {/* Кнопка отправки */}
            <button
              type="submit" disabled={submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:bg-gray-500"
            >
              {submitting ? t('reviews.btn_submitting') : t('reviews.btn_submit')}
            </button>
          </form>
        </motion.div>

        {/* === КОЛОНКА 2: СПИСОК ОТЗЫВОВ === */}
        <div className="h-[600px] overflow-y-auto pr-4">
          {/* 6. Переводим заглушки */}
          {loading && <p className="text-white text-center">{t('reviews.placeholder_loading')}</p>}
          
          {!loading && reviews.length === 0 && (
            <p className="text-gray-400 text-center">{t('reviews.placeholder_empty')}</p>
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
                    {/* Текст пользователя - НЕ ТРОГАЕМ */}
                    <h4 className="text-lg font-semibold text-white">{review.author}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                  {/* Текст пользователя - НЕ ТРОГАЕМ */}
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