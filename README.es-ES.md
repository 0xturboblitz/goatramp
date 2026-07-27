# 🐐GOAT RAMP🐐

¿Eres... el GOAT? 🐐

Cuando alguien paga con una tarjeta de crédito en una terminal de pago, el chip electrónico de la tarjeta firma los datos de la transacción.
Con frecuencia, el banco responde con otra firma para confirmar la transacción.

¿No hay algo divertido que hacer aquí?

GoatRamp utiliza un lector NFC y un fork de una terminal de pago para extraer firmas de la tarjeta durante el pago. Esto desbloquea dos primitivas interesantes:
- Primero, en el ámbito de la identidad, se vuelve posible demostrar que se posee una tarjeta de crédito con ciertas características. Estos datos pueden agregarse con herramientas como [semaphore](https://github.com/semaphore-protocol/semaphore), [zk-email](https://github.com/zkemail/), [proof of passport](https://github.com/zk-passport/proof-of-passport) o [totem](https://github.com/0xturboblitz/totem) para proporcionar una prueba más de identidad única.
- Segundo, abre nuevas vías para onramps y offramps con confianza minimizada. En particular, se vuelve posible que un usuario demuestre que realizó un pago fíat y retire fondos bloqueados en un contrato inteligente de manera trustless. Esto crea una nueva forma de fusionar las finanzas tradicionales y descentralizadas que es más segura tanto para los usuarios como para los servicios de onramp. Proporcionamos un contrato inteligente de prueba de concepto que permite el onramp utilizando firmas de tarjetas de crédito.

### Arquitectura

Hicimos un fork de [emvpt](https://github.com/mrautio/emvpt/) y [emv-card-simulator](https://github.com/mrautio/emv-card-simulator), que son implementaciones mínimas de una terminal de pago y una tarjeta de crédito.
Adicionalmente, utilizamos NFC para leer tarjetas de crédito reales.

<p align="center">
  <img src="https://github.com/0xturboblitz/goatramp/assets/62038140/1e74ae16-377e-40e0-b43d-4ce67beda324" />
</p>

Para proporcionar concisión y divulgación selectiva de la información de la transacción, verificamos las firmas en un zk-snark.
La implementación de firma más común que encontramos en los chips EMV es el cifrado de clave privada RSA con un exponente de 3. Esto es inusual: en lugar de ser firmado con una función hash o cifrado utilizando la clave pública de otro par de claves, el mensaje bruto se eleva a la potencia de la clave privada. Por lo tanto, puede recuperarse con la clave pública.

Proporcionamos una implementación de la verificación de cifrado RSA con exponente de 3 en circom y compilamos un verificador para cadenas EVM.

### Ejecución

Las instrucciones para ejecutar el proyecto se encuentran en cada uno de los subdirectorios.
