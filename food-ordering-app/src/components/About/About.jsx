import React from "react";
import { stats, team, values } from "../../utils/aboutData";

function About() {
  return (
    <div className="bg-white">

      {/* Hero Banner */}
      <div className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            About <span className="text-orange-400">NamasteEats</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200 max-w-2xl">
            Born from a simple craving, built for a billion appetites.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">Our Story</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900 leading-tight">
              It All Started With a Missed Lunch
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              In 2018, Arjun Mehta was a software engineer who simply couldn't
              find a good home-cooked meal near his office in Bengaluru. Every
              lunch break ended in disappointment — cold food, long queues,
              limited choices.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              He teamed up with his college friend Priya, who shared his
              frustration. Together, they set out to build a platform that
              connected people with the best local restaurants — making
              delicious, fresh food accessible to everyone, anywhere.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Today, <strong className="text-gray-900">NamasteEats</strong> is
              one of India's fastest-growing food delivery platforms, serving
              over a million customers across 50+ cities. But our mission
              remains the same: <em>bring joy to every table</em>.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
              alt="Fresh pizza"
              className="rounded-2xl shadow-lg w-full h-60 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=800&auto=format&fit=crop"
              alt="Pancakes"
              className="rounded-2xl shadow-lg w-full h-60 object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop"
              alt="Colorful salad"
              className="rounded-2xl shadow-lg w-full h-60 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=800&auto=format&fit=crop"
              alt="Burger"
              className="rounded-2xl shadow-lg w-full h-60 object-cover mt-8"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-orange-500 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-5xl font-extrabold">{s.value}</div>
                <div className="mt-2 text-orange-100 text-lg font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">What We Stand For</span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{v.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-orange-500 font-semibold uppercase tracking-widest text-sm">The People Behind</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="relative h-56">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-orange-500 font-medium text-sm mt-1">{member.role}</p>
                  <p className="mt-4 text-gray-500 text-sm italic">"{member.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gray-900 py-20 text-center">
        <img
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2074&auto=format&fit=crop"
          alt="Food background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <h2 className="text-4xl font-bold text-white">
            Hungry? We've Got You.
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Order from your favorite restaurants and get fresh food delivered to your door.
          </p>
          <a
            href="/"
            className="mt-8 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-colors duration-200 shadow-lg"
          >
            Order Now 🍕
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;