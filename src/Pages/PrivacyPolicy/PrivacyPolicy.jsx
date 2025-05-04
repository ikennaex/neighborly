import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='container'>
      <div className='mx-auto py-7 lg:px-20 px-5'>
        <div>
        <h2 className='text-2xl font-bold text-customBlue text-center mb-7'>🔐 Privacy Policy</h2>

        <section>
        <p>
          Welcome to <strong>Neighborly.ng</strong> ("we", "our", or "us"). Your privacy is important to us. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you visit our platform or use our services.
        </p>
        <p>By using Neighborly.ng, you agree to the practices described in this Privacy Policy.</p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <p><strong>a. Personal Information</strong></p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Payment details (handled via Flutterwave)</li>
        </ul>

        <p><strong>b. Non-Personal Information</strong></p>
        <ul>
          <li>Browser type</li>
          <li>Device information</li>
          <li>IP address</li>
          <li>Usage data (pages visited, actions taken)</li>
        </ul>

        <p><strong>c. Cookies and Tracking Technologies</strong></p>
        <p>We use cookies and similar technologies to enhance your experience.</p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To create and manage your account</li>
          <li>To process payments securely</li>
          <li>To improve our platform and personalize your experience</li>
          <li>To communicate with you (support, promotions)</li>
          <li>To prevent fraud and enhance safety</li>
        </ul>
      </section>

      <section>
        <h2>3. Sharing Your Information</h2>
        <p>We do <strong>not</strong> sell your personal information. We may share data with:</p>
        <ul>
          <li>Service providers (e.g., Flutterwave, hosting services)</li>
          <li>Legal authorities if required by law</li>
          <li>Other users as necessary (e.g., buyer-seller communication)</li>
        </ul>
      </section>

      <section>
        <h2>4. Your Rights and Choices</h2>
        <p>You may:</p>
        <ul>
          <li>Access or delete your personal data</li>
          <li>Correct inaccuracies</li>
          <li>Opt-out of marketing messages</li>
          <li>Disable cookies via browser settings</li>
        </ul>
        <p>Contact us at <a href="mailto:support@neighborly.ng">support@neighborly.ng</a>.</p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>We take steps to protect your information using modern security practices.</p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>
          Neighborly.ng may contain links to third-party sites or tools. We are not responsible for 
          their privacy practices.
        </p>
      </section>

      <section>
        <h2>7. Children's Privacy</h2>
        <p>
          We do not knowingly collect personal information from children under 13. Contact us if you believe a child has submitted info.
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. The "Effective Date" will reflect the latest revision.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>If you have any questions, contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:neighborly2025@gmail.com">neighborly2025@gmail.com</a></li>
          <li><strong>Phone: </strong>09116241758, 08069114190 <br/></li>
          <li><strong>Address: </strong> 4 LADEGA STREET CHEVY VIEW ESTATE CHEVRON DRIVE, LEKKI, LAGOS STATE <br/></li>
          
          {/* <li><strong>Website:</strong> <a href="https://neighborly.ng" target="_blank" rel="noopener noreferrer">https://neighborly.ng</a></li> */}
        </ul>
      </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
