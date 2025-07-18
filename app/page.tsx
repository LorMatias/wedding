"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function WeddingInvitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [rsvpForm, setRsvpForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attendance: "",
    message: "",
  });

  useEffect(() => {
    const targetDate = new Date("2024-06-15T16:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("RSVP submitted:", rsvpForm);
    alert("¡Gracias por confirmar tu asistencia!");
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Fondo de flores fijo */}
      {/* Contenido principal */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center relative"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/foto1.JPG"
              alt="Andrea y Joaquin en Patagonia"
              fill
              className="object-cover"
              priority
            />
            {/* Additional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="mb-16">
              <div className="relative">
                <svg
                  viewBox="0 0 400 100"
                  className="w-full max-w-2xl h-24 translate-x-35"
                >
                  <defs>
                    <path id="curve" d="M 50,75 Q 200,25 350,75" />
                  </defs>
                  <text
                    className="fill-yellow-400 text-4xl drop-shadow-lg"
                    style={{ fontFamily: "Karl Geof" }}
                  >
                    <textPath
                      href="#curve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      Nos Casamos
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <svg
                  viewBox="0 0 500 150"
                  className="w-full max-w-2xl h-30 translate-x-35"
                >
                  <defs>
                    <path id="andrea-curve" d="M 50,95 Q 250,35 450,95" />
                  </defs>
                  <text
                    className="fill-yellow-400 text-8xl md:text-8xl lg:text-8xl font-normal italic drop-shadow-lg"
                    style={{ fontFamily: "Karl Geof" }}
                  >
                    <textPath
                      href="#andrea-curve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      Andrea
                    </textPath>
                  </text>
                </svg>
              </div>

              <div>
                <svg
                  viewBox="0 0 500 150"
                  className="w-full max-w-2xl h-30 translate-x-35 translate-y-5"
                >
                  <defs>
                    <path id="joaquin-curve" d="M 50,45 Q 250,105 450,45" />
                  </defs>
                  <text
                    className="fill-yellow-400 text-5xl md:text-8xl lg:text-7xl font-normal italic drop-shadow-lg"
                    style={{ fontFamily: "Karl Geof" }}
                  >
                    <textPath
                      href="#joaquin-curve"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      Joaquin
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Countdown Section */}
        <section className="py-20 bg-gray-100 backdrop-blur-sm relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                className="text-3xl md:text-5xl text-yellow-500 mb-4 italic"
                style={{ fontFamily: "cursive" }}
              >
                Faltan
              </h2>
              <div className="w-16 h-px bg-gray-400 mx-auto"></div>
            </div>
            <div className="flex justify-center items-center space-x-4 md:space-x-8">
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white shadow-lg">
                  <span
                    className="text-2xl md:text-3xl font-bold text-yellow-500"
                    style={{ fontFamily: "cursive" }}
                  >
                    {timeLeft.days}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Días</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white shadow-lg">
                  <span
                    className="text-2xl md:text-3xl font-bold text-yellow-500"
                    style={{ fontFamily: "cursive" }}
                  >
                    {timeLeft.hours}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Hs</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white shadow-lg">
                  <span
                    className="text-2xl md:text-3xl font-bold text-yellow-500"
                    style={{ fontFamily: "cursive" }}
                  >
                    {timeLeft.minutes}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Min</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white shadow-lg">
                  <span
                    className="text-2xl md:text-3xl font-bold text-yellow-500"
                    style={{ fontFamily: "cursive" }}
                  >
                    {timeLeft.seconds}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Seg</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="historia">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl text-yellow-500 mb-4 italic"
                style={{ fontFamily: "cursive" }}
              >
                La Propuesta
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Image
                    src="/images/propuesta.jpg"
                    alt="Andrea y Joaquin en Patagonia"
                    width={270}
                    height={290}
                    className="rounded-lg shadow-lg "
                  />
                </div>
                <div>
                  <Image
                    src="/images/propuesta3.jpg"
                    alt="Andrea y Joaquin en Patagonia"
                    width={400}
                    height={400}
                    className="rounded-lg shadow-lg "
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed ">
                TEXTO GENERICO Nos conocimos en la universidad hace 5 años. Lo
                que comenzó como una amistad se convirtió en algo mucho más
                especial. Desde nuestras primeras conversaciones, supimos que
                habíamos encontrado algo único.
              </p>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section
          id="evento"
          className="py-20 bg-white/80 backdrop-blur-sm relative"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Ceremony */}
              <div className="text-center">
                <div className="mb-8">
                  {/* Church Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-gray-600"
                      fill="currentColor"
                    >
                      <path d="M50 10 L45 20 L35 20 L35 25 L25 25 L25 85 L75 85 L75 25 L65 25 L65 20 L55 20 L50 10 Z M50 15 L52 20 L48 20 L50 15 Z M40 25 L40 30 L45 30 L45 35 L40 35 L40 40 L60 40 L60 35 L55 35 L55 30 L60 30 L60 25 L40 25 Z M30 30 L30 80 L70 80 L70 30 L65 30 L65 45 L35 45 L35 30 L30 30 Z M45 50 L55 50 L55 60 L45 60 L45 50 Z M40 65 L60 65 L60 75 L40 75 L40 65 Z" />
                      <path d="M47 12 L53 12 L53 8 L47 8 Z" />
                      <circle cx="50" cy="32" r="3" />
                    </svg>
                  </div>
                </div>
                <h2
                  className="text-3xl text-yellow-500 mb-8 tracking-wider italic"
                  style={{ fontFamily: "cursive" }}
                >
                  Ceremonia
                </h2>
                <div className="space-y-3 mb-8">
                  <p className="text-gray-700 italic text-lg">
                    15 de Marzo a las 15:00 horas en la Iglesia de los
                    Capuchinos.
                  </p>
                  <p className="text-gray-700 italic">
                    Buenos Aires 600-699, Córdoba.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Recibí debajo las indicaciones para llegar.
                  </p>
                </div>
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm tracking-wider">
                  LLEGAR A LA CEREMONIA
                </Button>
              </div>

              {/* Reception */}
              <div className="text-center">
                <div className="mb-8">
                  {/* Party Hat Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full text-gray-600"
                      fill="currentColor"
                    >
                      <path d="M20 75 L80 75 L65 25 L35 25 Z" />
                      <path d="M50 15 L55 25 L45 25 Z" />
                      <circle cx="25" cy="30" r="2" />
                      <circle cx="35" cy="35" r="1.5" />
                      <circle cx="45" cy="40" r="2" />
                      <circle cx="55" cy="35" r="1.5" />
                      <circle cx="65" cy="40" r="2" />
                      <circle cx="75" cy="30" r="1.5" />
                      <path d="M50 10 L52 15 L48 15 Z" />
                      <circle cx="50" cy="8" r="2" />
                    </svg>
                  </div>
                </div>
                <h2
                  className="text-3xl text-yellow-500 mb-8 tracking-wider italic"
                  style={{ fontFamily: "cursive" }}
                >
                  Fiesta
                </h2>
                <div className="space-y-3 mb-8">
                  <p className="text-gray-700 italic text-lg">
                    Después de la ceremonia festejaremos en el Salón Santa
                    Bárbara.
                  </p>
                  <p className="text-gray-700 italic">
                    Av. Cdad. de Valparaíso 6000, Córdoba.
                  </p>
                  <p className="text-gray-600 text-sm">¡Te esperamos!</p>
                </div>
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-sm tracking-wider">
                  LLEGAR A LA FIESTA
                </Button>
              </div>
            </div>

            {/* Dress Code */}
            <div className="mt-20 text-center">
              <Card className="bg-gray-100 border-gray-200 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3
                    className="text-2xl text-yellow-500 mb-4 italic"
                    style={{ fontFamily: "cursive" }}
                  >
                    Código de Vestimenta
                  </h3>
                  <p className="text-gray-700 mb-4">Elegante Sport</p>
                  <p className="text-sm text-gray-600">
                    Te pedimos que evites el color blanco para que la novia sea
                    la única protagonista de ese color.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* RSVP Section */}
        <section
          id="rsvp"
          className="py-20 bg-gray-50/60 backdrop-blur-sm relative"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl text-yellow-500 mb-4 italic"
                style={{ fontFamily: "cursive" }}
              >
                Confirmar Asistencia
              </h2>
              <div className="w-24 h-px bg-gray-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tu presencia es el mejor regalo que podemos recibir. Por favor,
                confirma tu asistencia antes del 1 de Junio para poder organizar
                todo perfectamente.
              </p>
            </div>
            <Card className="max-w-2xl mx-auto bg-gray-100 border-gray-100">
              <CardContent className="p-8">
                <form onSubmit={handleRsvpSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-yellow-600 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        type="text"
                        required
                        value={rsvpForm.name}
                        onChange={(e) =>
                          setRsvpForm({ ...rsvpForm, name: e.target.value })
                        }
                        className="border-gray-300 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-yellow-600 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={rsvpForm.email}
                        onChange={(e) =>
                          setRsvpForm({ ...rsvpForm, email: e.target.value })
                        }
                        className="border-gray-300 focus:border-yellow-500"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-yellow-600 mb-2">
                        Número de invitados
                      </label>
                      <select
                        value={rsvpForm.guests}
                        onChange={(e) =>
                          setRsvpForm({ ...rsvpForm, guests: e.target.value })
                        }
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      >
                        <option value="1">1 persona</option>
                        <option value="2">2 personas</option>
                        <option value="3">3 personas</option>
                        <option value="4">4 personas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-yellow-600 mb-2">
                        ¿Podrás acompañarnos? *
                      </label>
                      <select
                        required
                        value={rsvpForm.attendance}
                        onChange={(e) =>
                          setRsvpForm({
                            ...rsvpForm,
                            attendance: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-yellow-500 focus:outline-none"
                      >
                        <option value="">Seleccionar</option>
                        <option value="si">Sí, estaré presente</option>
                        <option value="no">No podré asistir</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-600 mb-2">
                      Mensaje especial (opcional)
                    </label>
                    <Textarea
                      value={rsvpForm.message}
                      onChange={(e) =>
                        setRsvpForm({ ...rsvpForm, message: e.target.value })
                      }
                      placeholder="Déjanos un mensaje..."
                      className="border-gray-300 focus:border-yellow-500"
                      rows={4}
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full text-lg shadow-lg"
                    >
                      Confirmar Asistencia
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contacto"
          className="py-20 bg-white/80 backdrop-blur-sm relative"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl text-yellow-700 mb-4 italic"
                style={{ fontFamily: "cursive" }}
              >
                Contacto
              </h2>
              <div className="w-24 h-px bg-gray-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Si tienes alguna pregunta o necesitas más información, no dudes
                en contactarnos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="bg-gray-50/50 border-gray-200">
                <CardContent className="p-4 text-center">
                  <Phone className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                  <h3
                    className="text-lg text-yellow-700 mb-1 italic"
                    style={{ fontFamily: "cursive" }}
                  >
                    Andrea
                  </h3>
                  <p className="text-gray-600 text-sm">+54 11 1234-5678</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-50/50 border-gray-200">
                <CardContent className="p-4 text-center">
                  <Mail className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                  <h3
                    className="text-lg text-yellow-700 mb-1 italic"
                    style={{ fontFamily: "cursive" }}
                  >
                    Joaquin
                  </h3>
                  <p className="text-gray-600 text-sm">+54 11 8765-4321</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-12 relative">
          <div className="container mx-auto px-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-4 text-gray-300" />
            <p
              className="text-yellow-600 mb-2 italic"
              style={{ fontFamily: "cursive" }}
            >
              Andrea & Joaquin
            </p>
            <p className="text-gray-300 text-sm">15 de Junio, 2024</p>
            <p className="text-gray-400 text-xs mt-4">
              Con amor, esperamos celebrar este día especial junto a ustedes
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
