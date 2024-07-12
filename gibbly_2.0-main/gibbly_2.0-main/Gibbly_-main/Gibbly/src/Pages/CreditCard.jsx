import React, { useState } from 'react';
import chipImage from './chip.png';
import visaImage from './visa.png';

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expMonth, setExpMonth] = useState('month');
  const [expYear, setExpYear] = useState('year');
  const [cvv, setCvv] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column',
    paddingBottom: '60px',
  };

  const formStyle = {
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, .1)',
    padding: '20px',
    width: '90%',
    maxWidth: '600px',
    paddingTop: '160px',
  };

  const inputBoxStyle = {
    marginTop: '20px',
  };

  const labelStyle = {
    display: 'block',
    color: '#999',
    paddingBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, .3)',
    color: '#444',
  };

  const flexboxStyle = {
    display: 'flex',
    gap: '15px',
  };

  const submitBtnStyle = {
    width: '100%',
    background: 'linear-gradient(45deg, blueviolet, deeppink)',
    marginTop: '20px',
    padding: '10px',
    fontSize: '20px',
    color: '#fff',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '.2s linear',
  };

  const cardContainerStyle = {
    marginBottom: '-150px',
    position: 'relative',
    height: '250px',
    width: '100%',
    maxWidth: '400px',
  };

  const frontStyle = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    background: 'linear-gradient(45deg, blueviolet, deeppink)',
    borderRadius: '5px',
    backfaceVisibility: 'hidden',
    boxShadow: '0 15px 25px rgba(0, 0, 0, .2)',
    padding: '20px',
    transform: 'perspective(1000px) rotateY(0deg)',
    transition: 'transform .4s ease-out',
    ...isCardFlipped ? { transform: 'perspective(1000px) rotateY(-180deg)' } : {},
  };

  const backStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    width: '100%',
    background: 'linear-gradient(45deg, blueviolet, deeppink)',
    borderRadius: '5px',
    padding: '20px 0',
    textAlign: 'right',
    backfaceVisibility: 'hidden',
    boxShadow: '0 15px 25px rgba(0, 0, 0, .2)',
    transform: 'perspective(1000px) rotateY(180deg)',
    transition: 'transform .4s ease-out',
    ...isCardFlipped ? { transform: 'perspective(1000px) rotateY(0deg)' } : {},
  };

  const stripeStyle = {
    backgroundColor: '#000',
    width: '100%',
    margin: '10px 0',
    height: '50px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardContainerStyle}>
        <div style={frontStyle}>
          <div className="image" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px' }}>
            <img src={chipImage} alt="Chip" style={{ height: '50px' }} />
            <img src={visaImage} alt="Visa" style={{ height: '50px' }} />
          </div>
          <div className="card-number-box" style={{ padding: '30px 0', fontSize: '22px', color: '#fff' }}>{cardNumber || '################'}</div>
          <div style={flexboxStyle}>
            <div style={{ flex: '1 1 150px' }}>
              <span style={{ fontSize: '15px', color: '#fff' }}>Card Holder</span>
              <div className="card-holder-name" style={{ fontSize: '15px', color: '#fff' }}>{cardHolder || 'Full Name'}</div>
            </div>
            <div style={{ flex: '1 1 150px' }}>
              <span style={{ fontSize: '15px', color: '#fff' }}>Expires</span>
              <div className="expiration" style={{ fontSize: '15px', color: '#fff' }}>
                <span className="exp-month">{expMonth}</span>
                <span className="exp-year">{expYear}</span>
              </div>
            </div>
          </div>
        </div>
        <div style={backStyle}>
          <div style={stripeStyle}></div>
          <div style={{ padding: '0 20px' }}>
            <span style={{ color: '#fff', fontSize: '15px' }}>CVV</span>
            <div className="cvv-box" style={{ height: '50px', padding: '10px', marginTop: '5px', color: '#333', background: '#fff', borderRadius: '5px', width: '100%' }}>{cvv}</div>
            <img src={visaImage} alt="Visa" style={{ marginTop: '30px', height: '30px' }} />
          </div>
        </div>
      </div>
      <form style={formStyle}>
        <div style={inputBoxStyle}>
          <span style={labelStyle}>Card Number</span>
          <input
            type="text"
            maxLength="16"
            className="card-number-input"
            style={inputStyle}
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <div style={inputBoxStyle}>
          <span style={labelStyle}>Card Holder</span>
          <input
            type="text"
            className="card-holder-input"
            style={inputStyle}
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>
        <div style={flexboxStyle}>
          <div style={{ ...inputBoxStyle, flex: '1 1 150px' }}>
            <span style={labelStyle}>Expiration MM</span>
            <select
              className="month-input"
              style={inputStyle}
              value={expMonth}
              onChange={(e) => setExpMonth(e.target.value)}
            >
              <option value="month" disabled>Month</option>
              {[...Array(12).keys()].map(i => (
                <option key={i} value={String(i + 1).padStart(2, '0')}>{String(i + 1).padStart(2, '0')}</option>
              ))}
            </select>
          </div>
          <div style={{ ...inputBoxStyle, flex: '1 1 150px' }}>
            <span style={labelStyle}>Expiration YY</span>
            <select
              className="year-input"
              style={inputStyle}
              value={expYear}
              onChange={(e) => setExpYear(e.target.value)}
            >
              <option value="year" disabled>Year</option>
              {[...Array(10).keys()].map(i => (
                <option key={i} value={2021 + i}>{2021 + i}</option>
              ))}
            </select>
          </div>
          <div style={{ ...inputBoxStyle, flex: '1 1 150px' }}>
            <span style={labelStyle}>CVV</span>
            <input
              type="text"
              maxLength="4"
              className="cvv-input"
              style={inputStyle}
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              onFocus={() => setIsCardFlipped(true)}
              onBlur={() => setIsCardFlipped(false)}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Submit"
          style={submitBtnStyle}
        />
      </form>
    </div>
  );
};

export default CreditCard;
