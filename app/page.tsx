"use client"
import { CardHoverEffectDemo } from '@/components/CardSection';
import CarouselTransition from '@/components/CarouselTransition';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <CarouselTransition />
        <CardHoverEffectDemo />

        <div className="my-12">
          <h1 className="text-3xl font-bold text-center mb-6">Why Create Another Political Party?</h1>
          <p className="text-lg">
            Despite India&apos;s boast of over 3000 political entities, a genuine demand for a new, transformative political force persists. Existing parties, akin to organized gangs, predominantly seek power by dividing the populace. They obscure the &apos;Sahi Paksh&apos;&mdash;the right path&mdash;favoring endless debates over constructiveness.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Core Issues</h2>
          <p className="mt-4">
            True democracy has been overshadowed by the spectacle of manipulated elections and media theatrics serving powerful paymasters. Common citizens remain besieged by corruption, lack of accountability, and substandard living conditions despite significant technological and scientific advancements like Chandrayaan.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Vision for Change</h2>
          <p className="mt-4">
            The Bharatiya Liberal Party (BLP) proposes a radical overhaul of the system&mdash;&apos;Vyastha Parivartan&apos;&mdash;targeting reforms at the electoral, judicial, and administrative levels to cultivate a truly democratic environment where governance is transparent, accountable, and inclusive.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Our Strategy</h2>
          <p className="mt-4">
            Unique to BLP, the President and National Council will not contest elections, ensuring focus on long-term goals rather than electoral gains. Candidate selection will be uniquely democratic through Primary elections where party members and the public can vote, promoting a &apos;Lok Umeedwar / Public Candidate&apos; system.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Proposed Reforms</h2>
          <ul className="list-disc pl-8 mt-2 text-lg">
            <li>Abolition of large currency notes and linking property ownership to Aadhar to combat corruption and black money.</li>
            <li>Introduction of NOTA as a candidate to force re-elections if it gains the majority, ensuring only worthy candidates are elected.</li>
            <li>Make all political parties subject to the Right to Information Act.</li>
            <li>Discontinue electoral bonds, enhancing transparency in political funding.</li>
            <li>Implement a &apos;Right to Recall&apos; for non-performing elected representatives.</li>
            <li>Establish &apos;One Nation, One Election&apos; to reduce the perpetual electoral noise and expenditure.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Commitment to National Issues</h2>
          <p className="mt-4">
            BLP stands firmly for issues like Akhand Bharat, Uniform Civil Code, and supports international causes like Free Tibet, reflecting our adherence to principles over politics.
          </p>

          <h2 className="text-xl font-semibold mt-8">Leadership Profile</h2>
          <p className="mt-4">
            Dr. Munish Kumar Raizada, our founding president, embodies our commitment to principled politics. With a background in medicine and a history of activism, he returned to India to contribute to political reform, advocating for transparency and integrity in politics.
          </p>

          <p className="mt-4">
            For more detailed insights into our policies and leadership, please explore further sections of our site or contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
