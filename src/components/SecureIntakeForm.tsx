'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

type IntakeDataPoint = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
};

const FIELDS: IntakeDataPoint[] = [
  {
    id: 'identity',
    label: 'Identity Verification',
    placeholder: 'Your full legal name',
  },
  {
    id: 'organization',
    label: 'Organization Matrix',
    placeholder: 'Primary entity & reporting line',
  },
  {
    id: 'objective',
    label: 'Mission Objective',
    placeholder: 'e.g. “Launch design system in LATAM Q2”',
  },
  {
    id: 'sensitivity',
    label: 'Sensitivity Band',
    placeholder: 'Select band',
    type: 'select',
  },
  {
    id: 'channels',
    label: 'Secure Return Channel',
    placeholder: 'Zero-trust inbox / PGP fingerprint',
    type: 'textarea',
  },
];

const bands = [
  'Tier ∅ — Public Summary',
  'Tier 1 — Executive Distribution',
  'Tier 2 — Board & Counsel',
  'Tier Φ — Black Chamber',
];

const SecureIntakeForm = () => {
  const [activeField, setActiveField] = useState<string>(FIELDS[0]?.id ?? '');
  const [band, setBand] = useState(bands[1]);
  const controls = useAnimationControls();

  return (
    <motion.div
      className="form-shell"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="form-shell__header">
        <div>
          <p className="tagline">Secure Intake — Tier Zero Touch</p>
          <h3>Gold-Standard Vault Entry</h3>
          <p className="lede">
            No calls. No calendars. Our vault-grade intake orchestrates context, risk posture, and delivery
            channels without human exposure.
          </p>
        </div>
        <motion.div
          className="form-shell__badge"
          animate={controls}
          onHoverStart={() => controls.start({ boxShadow: '0 0 24px rgba(117, 166, 255, 0.45)' })}
          onHoverEnd={() => controls.start({ boxShadow: '0 0 0 rgba(0,0,0,0)' })}
        >
          <span>Verified</span>
          <strong>ISO/IEC 27001</strong>
        </motion.div>
      </div>

      <div className="form-shell__grid">
        {FIELDS.map((field, index) => (
          <motion.div
            key={field.id}
            className={`form-card ${activeField === field.id ? 'form-card--active' : ''}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
          >
            <label htmlFor={field.id}>{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                placeholder={field.placeholder}
                onFocus={() => setActiveField(field.id)}
                rows={3}
              />
            ) : field.type === 'select' ? (
              <div className="select-shell">
                <select
                  id={field.id}
                  value={band}
                  onChange={(event) => setBand(event.target.value)}
                  onFocus={() => setActiveField(field.id)}
                >
                  {bands.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            ) : (
              <input
                id={field.id}
                placeholder={field.placeholder}
                onFocus={() => setActiveField(field.id)}
                type="text"
              />
            )}
            <motion.span
              className="cursor-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeField === field.id ? 1 : 0 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            />
          </motion.div>
        ))}
      </div>

      <motion.button
        className="form-shell__cta"
        whileHover={{
          scale: 1.015,
          boxShadow: '0 18px 48px rgba(104, 157, 255, 0.4)',
        }}
        whileTap={{ scale: 0.995 }}
      >
        Initiate Zero-Trust Dossier
      </motion.button>

      <div className="form-shell__footnote">
        <span className="dot" />
        <p>Response dossier generated & delivered in under 180 minutes via quantum-encrypted channel.</p>
      </div>
    </motion.div>
  );
};

export default SecureIntakeForm;
