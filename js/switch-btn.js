const canClick = document.querySelector('.canClick')
canClick.addEventListener('click', entraDiv)

function entraDiv()
{
   const options = document.querySelector('.options-theme')

   options.classList.remove('hide')
   options.classList.remove('animate-off')
   options.classList.add('animate-on')
   canClick.removeEventListener('click', entraDiv)
   canClick.addEventListener('click', saiDiv)
}

function saiDiv()
{
   const options = document.querySelector('.options-theme')

   options.classList.remove('animate-on')
   options.classList.add('animate-off')
   canClick.removeEventListener('click', saiDiv)
   canClick.addEventListener('click', entraDiv)
}

const dark = document.querySelector('.first-option')
const light = document.querySelector('.second-option')

dark.addEventListener('click', selectDark)
light.addEventListener('click', selectLight)

function selectDark() // ↓ C2
{
   let pgtheme = document.querySelector('.canClick').dataset.pagetheme

   if (pgtheme == 0) // ↓ C1
   {
      return
   }
   else
   {
      document.querySelector('.canClick').dataset.pagetheme = 0

      const DIVswitch = document.querySelector('.switch-btn')
      DIVswitch.classList.remove('isLight')
      DIVswitch.classList.add('isDark')

      
      const imgDARK = document.querySelector('#imgDARK')
      const imgLIGHT = document.querySelector('#imgLIGHT')
      imgLIGHT.classList.add('hide')
      imgDARK.classList.remove('hide')

      const carret = document.querySelector('.carret-down')
      carret.classList.add('white-fill')
      carret.classList.remove('black-fill')

      const body = document.querySelector('#body')
      body.classList.add('dark-mode')
      body.classList.remove('light-mode')
   }
}

function selectLight() // ↓ C2
{
   let pgtheme = document.querySelector('.canClick').dataset.pagetheme

   if (pgtheme == 1)
   {
      return
   }
   else
   {
      document.querySelector('.canClick').dataset.pagetheme = 1

      const DIVswitch = document.querySelector('.switch-btn')
      DIVswitch.classList.remove('isDark')
      DIVswitch.classList.add('isLight')

      const imgDARK = document.querySelector('#imgDARK')
      const imgLIGHT = document.querySelector('#imgLIGHT')
      imgDARK.classList.add('hide')
      imgLIGHT.classList.remove('hide')

      const carret = document.querySelector('.carret-down')
      carret.classList.add('black-fill')
      carret.classList.remove('white-fill')

      const body = document.querySelector('#body')
      body.classList.add('light-mode')
      body.classList.remove('dark-mode')
   }
}

/*       -==--==--==--==-   COMENTÁRIOS   -==--==--==--==-

C1 - Verificando o valor do data-pagetheme. Se for 0, significa que o tema da página é Dark e se for 1 é Light.

C2 - Explicando a função:
         1- Pegamos o valor do dataset chamado pagetheme da DIV de classe "canClick"
         2- Verificamos se já está no tema, caso esteja, nada é feito.
         3- Caso não esteja, vamos fazer alguns procedimentos:
            3.1- Mudar o valor do dataset;
            3.2- Remover a classe atual e adicionar a classe do tema escolhido (isLight ou isDark) na DIV de classe switch-btn;
            3.3- Esconder a imagem svg do tema antigo e mostrar a do tema escolhido;
            3.4- Remover a classe de preenchimento do carret e adicionar a classe correspondente para as cores se adequarem ao tema escolhido;
            3.5- Adicionar a classe ao site, dependendo da escolha do usuário

   Com isso, alteramos o tema da página, mudando o aspecto visual para o usuário.
*/