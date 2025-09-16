import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validación básica
    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Aquí integrarías con tu servicio de newsletter (Mailchimp, ConvertKit, etc.)
    console.log('Nueva suscripción:', { email })

    // Simular suscripción exitosa
    return NextResponse.json(
      { message: 'Suscripción exitosa' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error en newsletter:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}