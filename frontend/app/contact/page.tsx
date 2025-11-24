'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { sendContactMessage } from '@/shared/portfolio-services';
import { Mail, Send, Github, Linkedin, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'El asunto debe tener al menos 3 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await sendContactMessage(data);
      setSubmitted(true);
      toast.success('¡Mensaje enviado correctamente!');
      reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <Header />
      
      <main className='pt-24 pb-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-16'>
            <div className='inline-block mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='h-8 w-8 text-white' />
              </div>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
              Contacto
            </h1>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            {/* Contact Info */}
            <div className='lg:col-span-1 space-y-6'>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700'>
                <h3 className='text-xl font-bold text-white mb-6'>Información de Contacto</h3>
                
                <div className='space-y-4'>
                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Mail className='h-5 w-5 text-blue-400' />
                    </div>
                    <div>
                      <p className='text-gray-400 text-sm mb-1'>Email</p>
                      <a href='mailto:contacto@portfolio.com' className='text-white hover:text-blue-400 transition-colors'>
                        contacto@portfolio.com
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <MapPin className='h-5 w-5 text-cyan-400' />
                    </div>
                    <div>
                      <p className='text-gray-400 text-sm mb-1'>Ubicación</p>
                      <p className='text-white'>España</p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                      <Phone className='h-5 w-5 text-purple-400' />
                    </div>
                    <div>
                      <p className='text-gray-400 text-sm mb-1'>Disponibilidad</p>
                      <p className='text-white'>Lun - Vie, 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700'>
                <h3 className='text-xl font-bold text-white mb-6'>Redes Sociales</h3>
                
                <div className='space-y-3'>
                  <a 
                    href={process.env.NEXT_PUBLIC_GITHUB_URL || '#'} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all duration-200 group'
                  >
                    <Github className='h-5 w-5 text-gray-400 group-hover:text-white transition-colors' />
                    <span className='text-gray-300 group-hover:text-white transition-colors'>GitHub</span>
                  </a>

                  <a 
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 p-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-all duration-200 group'
                  >
                    <Linkedin className='h-5 w-5 text-gray-400 group-hover:text-white transition-colors' />
                    <span className='text-gray-300 group-hover:text-white transition-colors'>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700'>
                <h3 className='text-2xl font-bold text-white mb-6'>Envíame un Mensaje</h3>
                
                {submitted ? (
                  <div className='flex flex-col items-center justify-center py-12 text-center'>
                    <CheckCircle className='h-16 w-16 text-green-400 mb-4' />
                    <h4 className='text-2xl font-bold text-white mb-2'>¡Mensaje Enviado!</h4>
                    <p className='text-gray-400'>
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div>
                      <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                        Nombre *
                      </label>
                      <Input
                        id='name'
                        {...register('name')}
                        placeholder='Tu nombre'
                        className='bg-gray-900/50 border-gray-600 text-white focus:border-blue-500'
                      />
                      {errors.name && (
                        <p className='text-red-400 text-sm mt-1'>{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                        Email *
                      </label>
                      <Input
                        id='email'
                        type='email'
                        {...register('email')}
                        placeholder='tu@email.com'
                        className='bg-gray-900/50 border-gray-600 text-white focus:border-blue-500'
                      />
                      {errors.email && (
                        <p className='text-red-400 text-sm mt-1'>{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor='subject' className='block text-sm font-medium text-gray-300 mb-2'>
                        Asunto *
                      </label>
                      <Input
                        id='subject'
                        {...register('subject')}
                        placeholder='Asunto del mensaje'
                        className='bg-gray-900/50 border-gray-600 text-white focus:border-blue-500'
                      />
                      {errors.subject && (
                        <p className='text-red-400 text-sm mt-1'>{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                        Mensaje *
                      </label>
                      <Textarea
                        id='message'
                        {...register('message')}
                        placeholder='Cuéntame sobre tu proyecto...'
                        rows={6}
                        className='bg-gray-900/50 border-gray-600 text-white focus:border-blue-500 resize-none'
                      />
                      {errors.message && (
                        <p className='text-red-400 text-sm mt-1'>{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type='submit'
                      disabled={isSubmitting}
                      className='w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                    >
                      {isSubmitting ? (
                        <>
                          <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className='mr-2 h-4 w-4' />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
