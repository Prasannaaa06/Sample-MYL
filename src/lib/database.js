// Database functions with email integration using EmailJS
import emailjs from '@emailjs/browser';

// EmailJS configuration - Replace with your actual values
const EMAILJS_SERVICE_ID = 'service_4zzrq7p';
const EMAILJS_TEMPLATE_ID_QUERY = 'template_5d8spte';
const EMAILJS_TEMPLATE_ID_FEEDBACK = 'template_it1cnf3';
const EMAILJS_PUBLIC_KEY = '_icNiz5KkUeXTwC_j';

const sendEmail = async (templateId, templateParams) => {
  try {
    console.log('Using template ID:', templateId);
    console.log('Email parameters:', templateParams);

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('EmailJS response:', result);
    return { success: true };
  } catch (error) {
    console.error('Email send failed:', error);
    return { success: false, error: error.message };
  }
};

export const saveQuery = async (queryData) => {
  try {
    if (!queryData.name || !queryData.email || !queryData.query) {
      throw new Error('Missing required fields in queryData');
    }

    const queries = JSON.parse(localStorage.getItem('queries') || '[]');
    const newQuery = {
      id: Date.now(),
      type: 'query',
      timestamp: new Date().toISOString(),
      ...queryData
    };
    queries.push(newQuery);
    localStorage.setItem('queries', JSON.stringify(queries));

    const emailParams = {
      to_email: 'tprasanna1020@gmail.com',
      from_name: queryData.name,
      from_email: queryData.email,
      phone: queryData.phone,
      course: queryData.courseInterest || queryData.course,
      message: queryData.query || queryData.message,
      timestamp: new Date().toLocaleString()
    };

    const emailResult = await sendEmail(EMAILJS_TEMPLATE_ID_QUERY, emailParams);

    return {
      success: true,
      id: newQuery.id,
      emailSent: emailResult.success
    };
  } catch (error) {
    console.error('saveQuery error:', error);
    return { success: false, error: error.message };
  }
};

export const saveFeedback = async (feedbackData) => {
  try {
    if (!feedbackData.name || !feedbackData.email || !feedbackData.feedback) {
      throw new Error('Missing required fields in feedbackData');
    }

    const feedbacks = JSON.parse(localStorage.getItem('feedbacks') || '[]');
    const newFeedback = {
      id: Date.now(),
      type: 'feedback',
      timestamp: new Date().toISOString(),
      ...feedbackData
    };
    feedbacks.push(newFeedback);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    const emailParams = {
      to_email: 'tprasanna1020@gmail.com',
      from_name: feedbackData.name,
      from_email: feedbackData.email,
      courseAttended: feedbackData.courseAttended,
      rating: feedbackData.rating,
      message: feedbackData.feedback || feedbackData.message,
      timestamp: new Date().toLocaleString()
    };

    const emailResult = await sendEmail(EMAILJS_TEMPLATE_ID_FEEDBACK, emailParams);

    return {
      success: true,
      id: newFeedback.id,
      emailSent: emailResult.success
    };
  } catch (error) {
    console.error('saveFeedback error:', error);
    return { success: false, error: error.message };
  }
};

export const getAllQueries = () => {
  return JSON.parse(localStorage.getItem('queries') || '[]');
};

export const getAllFeedbacks = () => {
  return JSON.parse(localStorage.getItem('feedbacks') || '[]');
};
