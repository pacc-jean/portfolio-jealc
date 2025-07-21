'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaRedditAlien,
  FaWhatsapp,
  FaRegPaperPlane,
  FaRegCopy,
  FaExternalLinkAlt,
  FaBolt
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MdPhone } from 'react-icons/md';
import styles from '../styles/ContactSection.module.css';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
  hoverColor: string;
}

interface ContactInfo {
  type: 'email' | 'phone' | 'whatsapp';
  value: string;
  display: string;
  icon: React.ReactNode;
}

const ContactSection: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn size={24} />,
      url: 'https://www.linkedin.com/in/jean-kajuga-080018315/',
      color: '#0077B5',
      hoverColor: '#005885'
    },
    {
      name: 'X (Twitter)',
      icon: <FaTwitter size={24} />,
      url: 'https://x.com/plaidpeanuts',
      color: '#1DA1F2',
      hoverColor: '#0d8bd9'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://www.instagram.com/ean.lc/',
      color: '#E4405F',
      hoverColor: '#d31245'
    },
    {
      name: 'Reddit',
      icon: <FaRedditAlien size={24} />,
      url: 'https://www.reddit.com/user/Signal_Function6946/',
      color: '#FF4500',
      hoverColor: '#e03d00'
    }
  ];

  const contactInfo: ContactInfo[] = [
    {
      type: 'email',
      value: 'jean.l.kajuga@gmail.com',
      display: 'jean.l.kajuga@gmail.com',
      icon: <SiGmail size={20} />
    },
    {
      type: 'phone',
      value: '+254735579266',
      display: '+254 735 579 266',
      icon: <MdPhone size={20} />
    },
    {
      type: 'whatsapp',
      value: '+254769845876',
      display: '+254 769 845 876',
      icon: <FaWhatsapp size={20} />
    }
  ];

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Copy to clipboard functionality
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Handle contact action
  const handleContactAction = (info: ContactInfo) => {
    if (info.type === 'email') {
      window.location.href = `mailto:${info.value}`;
    } else if (info.type === 'phone') {
      window.location.href = `tel:${info.value}`;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.contact} ${isVisible ? styles.visible : ''}`}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      } as React.CSSProperties}
    >
      <div className={styles.backgroundEffects}>
        <div className={styles.mouseGlow}></div>
        <div className={styles.floatingParticles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <FaBolt className={styles.headerIcon} size={32} />
          </div>
          <h2 className={styles.title}>Let us Connect</h2>
          <p className={styles.subtitle}>
            Ready to collaborate? Drop me a line or connect on social media!
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Social Links */}
          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Follow Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${hoveredSocial === social.name ? styles.hovered : ''}`}
                  style={{
                    '--hover-color': social.hoverColor,
                    '--animation-delay': `${index * 0.1}s`
                  } as React.CSSProperties}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <div className={styles.socialIcon}>
                    {social.icon}
                  </div>
                  <span className={styles.socialName}>{social.name}</span>
                  <FaExternalLinkAlt size={16} className={styles.externalIcon} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Get In Touch</h3>
            <div className={styles.contactLinks}>
              {contactInfo.map((info, index) => (
                <div key={info.type} className={styles.contactItem}>
                  <button
                    className={styles.contactButton}
                    onClick={() => handleContactAction(info)}
                    style={{
                      '--animation-delay': `${(index + socialLinks.length) * 0.1}s`
                    } as React.CSSProperties}
                  >
                    <div className={styles.contactIcon}>
                      {info.icon}
                    </div>
                    <div className={styles.contactDetails}>
                      <span className={styles.contactType}>
                        {info.type === 'email' ? 'Email' : info.type === 'phone' ? 'Phone' : 'WhatsApp'}
                      </span>
                      <span className={styles.contactValue}>
                        {info.display}
                      </span>
                    </div>
                    <FaRegPaperPlane size={16} className={styles.sendIcon} />
                  </button>

                  <button
                    className={`${styles.copyButton} ${copiedItem === info.type ? styles.copied : ''}`}
                    onClick={() => copyToClipboard(info.value, info.type)}
                    title={copiedItem === info.type ? 'Copied!' : 'Copy to clipboard'}
                  >
                    <FaRegCopy size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.pulse}></div>
          <p className={styles.footerText}>
            Always open to interesting conversations and opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;