import React from "react";
import { milestones, awards } from "../../utils/ourJourneyData";

function OurJourney() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2070&auto=format&fit=crop"
          alt="Our journey hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/75 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Our <span className="text-orange-400">Journey</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl">
            From a paper napkin sketch to a million smiles — here's how we grew.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">The NamasteEats Story</span>
        <h2 className="mt-3 text-4xl font-bold text-gray-900">Six Years of Flavour & Fire</h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Every great journey begins with a single step — or in our case, a single missed lunch.
          We started small, moved fast, made mistakes, learned from them, and kept our focus
          on one thing: getting people the food they love, faster and fresher than ever before.
        </p>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2" />

          <div className="space-y-20">
            {milestones.map((m) => (
              <div key={m.year} className={`relative flex flex-col md:flex-row items-center gap-8 ${m.side === "right" ? "md:flex-row-reverse" : ""}`}>

                {/* Year bubble on center line */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-orange-500 text-white items-center justify-center font-extrabold text-sm shadow-lg z-10 ring-4 ring-white">
                  {m.year}
                </div>

                {/* Image */}
                <div className="md:w-5/12">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <img
                      src={m.img}
                      alt={m.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Gap for center line */}
                <div className="hidden md:block md:w-2/12" />

                {/* Content */}
                <div className={`md:w-5/12 ${m.side === "right" ? "md:text-right" : "md:text-left"}`}>
                  <span className="inline-block bg-orange-100 text-orange-600 font-bold text-sm px-3 py-1 rounded-full mb-3 md:hidden">
                    {m.year}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">{m.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">Recognition</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">Awards & Milestones</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100"
              >
                <div className="text-5xl mb-4">{a.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg">{a.title}</h3>
                <p className="text-orange-500 text-sm mt-1 font-medium">{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="relative overflow-hidden bg-gray-900 py-20 text-center">
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2074&auto=format&fit=crop"
          alt="What's next"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <h2 className="text-4xl font-bold text-white">What's Next? 🚀</h2>
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            We're expanding to 100 cities by 2026, launching NamasteMart for instant grocery delivery,
            and building South Asia's largest cloud kitchen network. The best chapters are yet to come.
          </p>
          <a
            href="/"
            className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors duration-200 shadow-lg"
          >
            Be Part of the Story 🍽️
          </a>
        </div>
      </section>

    </div>
  );
}

export default OurJourney;
