import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Bharatiya Liberal Party</h1>
          <p className="text-lg text-gray-600">Empowering People, Transforming India</p>
        </header>
        <main className="my-10">
          <section className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              Bharatiya Liberal Party is a political party founded in 2023 with a national vision and a focus on Delhi state. Our mission is to bring about positive change in India, particularly for the people of Delhi.
            </p>
            <p className="text-gray-700 mb-4">
              Our party slogan, &ldquo;दिल्ली पुकारे दिल से वक़्त है बदलाव का&hellip;&rdquo;, reflects our unwavering dedication to addressing the pressing issues faced by the people of Delhi.
            </p>
            <p className="text-gray-700 mb-4">
              To <span className="font-bold">join our movement</span> and stay updated, connect with us on{' '}
              <a href="https://linktr.ee/blparty" className="text-blue-500 font-bold">social media</a>.
            </p>
            <p className="text-gray-700">
              Contact us today: <br />
              Bharatiya Liberal Party <br />
              Phone / Whatsapp: <a href="tel:+919821578507" className="text-blue-500 font-bold">+91 98215 78507</a> <br />
              Email: <a href="mailto:mail@blparty.in" className="text-blue-500 font-bold">mail@blparty.in</a>
            </p>
          </section>
          <section className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Agenda</h2>
            <p className="text-gray-700 mb-4">
              &ldquo;भारतीय लिबरल पार्टी&rdquo; is committed to bringing comprehensive reforms to Delhi. We aim to address a wide range of issues including corruption, inadequate infrastructure, and insufficient public services.
            </p>
            <p className="text-gray-700 mb-4">
              Our party primary objective is to establish a <span className="font-bold">corruption-free</span> and <span className="font-bold">transparent</span> governance system that prioritizes the welfare of all citizens.
            </p>
            <p className="text-gray-700 mb-4">
              As a political leader, I am dedicated to implementing policies that promote <span className="font-bold">social justice</span>, <span className="font-bold">economic prosperity</span>, and <span className="font-bold">environmental sustainability</span>.
            </p>
            <div className="text-gray-700">
              Here are some key areas we focus on:
              <ul className="list-disc ml-8">
                <li>Better education and schools</li>
                <li>Improved healthcare services</li>
                <li>Employment opportunities for all</li>
                <li>Free education up to 12th grade</li>
                <li>Monthly financial assistance for housewives</li>
                <li>Pension support for senior citizens</li>
              </ul>
            </div>
          </section>
          <section className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Us</h2>
            <p className="text-gray-700 mb-4">
              Become a member of Bharatiya Liberal Party and play an active role in <span className="font-bold">shaping the future</span> of Delhi.
            </p>
            <p className="text-gray-700 mb-4">
              As a political leader, I invite you to <span className="font-bold">join us</span> in our mission to create a better Delhi for all its residents.
            </p>
            <p className="text-gray-700">
              Contact us today to get involved:
              <br />
              Phone / Whatsapp: <a href="tel:+919821578507" className="text-blue-500 font-bold">+91 98215 78507</a> <br />
              Email: <a href="mailto:mail@blparty.in" className="text-blue-500 font-bold">mail@blparty.in</a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
