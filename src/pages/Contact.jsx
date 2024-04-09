import { useState } from 'react';
import './css/contact.css'; // Importação do arquivo CSS personalizado

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: '', // Agora vamos deixar este campo vazio para ser preenchido pelo usuário
    honeypot: '',
    message: '',
    replyTo: '@',
    accessKey: 'f2694ff6-d48a-4ca9-a58b-5f03ca085896'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occurred while submitting the form'
      });
    }
  };

  return (
    <div>
      <div className='section dark-background'>
        <div className='container'>
          <div className='columns'>
            <div className='column' />
            <div className='column is-two-thirds'>
              <div
                className={
                  response.type === 'success'
                    ? 'notification success-notification'
                    : 'is-hidden'
                }
              >
                <p>{response.message}</p>
              </div>
              <div
                className={
                  response.type === 'error'
                    ? 'notification error-notification'
                    : 'is-hidden'
                }
              >
                <p>{response.message}</p>
              </div>
              <div
                className={response.message !== '' ? 'is-hidden' : 'columns'}
              >
                <div className='column content'>
                  <h2>Contact Form</h2>
                  <form
                    action='https://api.staticforms.xyz/submit'
                    method='post'
                    onSubmit={handleSubmit}
                  >
                    <div className='field'>
                      <label className='label'>Your Name</label>
                      <div className='control'>
                        <input
                          className='input rounded-input'
                          type='text'
                          placeholder='Name'
                          name='name'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Your Email</label>
                      <div className='control'>
                        <input
                          className='input rounded-input'
                          type='email'
                          placeholder='Email'
                          name='email'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Subject</label>
                      <div className='control'>
                        <div className='select'>
                          <select
                            name='subject'
                            onChange={handleChange}
                            required
                          >
                            <option value=''>Select Subject</option>
                            <option value='Contact'>Contact</option>
                            <option value='Suggestion'>Suggestion</option>
                            {/* Adicione mais opções conforme necessário */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className='field'>
                      <label className='label'>Message</label>
                      <div className='control'>
                        <textarea
                          className='textarea rounded-input'
                          placeholder='Your Message'
                          name='message'
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='field is-grouped'>
                      <div className='control'>
                        <button className='button is-primary rounded-button' type='submit'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='column' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
