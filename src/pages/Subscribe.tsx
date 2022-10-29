import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

import codeMockupImg from './../assets/code-mockup.png'

export const Subscribe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="max-w-[1100px] w-full flex flex-col md:flex-row justify-center md:justify-between md:items-center md:mt-20 mt-10 mx-auto">
        <div className="flex flex-col items-center mx-8 md:max-w-[640px] md:items-start">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight text-center md:text-left">
            Construa uma{' '}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-6 md:mt-4 mb-8 md:mb-0 text-gray-200 leading-relaxed text-center md:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded mr-0 md:mr-8 lg:mr-0">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              value={name}
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500"
            />
            <input
              type="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={codeMockupImg} className="mt-5 md:mt-2" />
    </div>
  )
}
