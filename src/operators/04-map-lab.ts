/**
 * =============== Operadores ===============
 * ============= tap =============
 * 
 */

import { fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML =
    `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget gravida elit. Suspendisse facilisis rutrum aliquet. Vivamus tincidunt, lectus ut bibendum feugiat, libero turpis dapibus dolor, condimentum tristique elit tortor et eros. Aenean aliquam ut erat nec mollis. Mauris molestie ante cursus, condimentum est vitae, pellentesque felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque porta purus condimentum velit sodales egestas. Donec nunc dolor, blandit vitae magna sed, dictum lacinia turpis. Integer nec congue neque. Duis sed dolor condimentum leo auctor tincidunt. Morbi massa purus, viverra quis metus at, rutrum sodales neque. Integer vel arcu est. Ut sit amet dignissim tortor. Sed id mauris et ligula ultricies eleifend vel nec erat. In suscipit purus sit amet molestie vehicula. Cras porta libero in risus faucibus viverra et eu nisl.
<br/><br/>
Nam feugiat accumsan turpis, at finibus leo volutpat dictum. Vivamus tincidunt nisi vel interdum finibus. Nulla ac faucibus quam. In iaculis ornare odio lacinia cursus. Sed ornare gravida ornare. Pellentesque ac dolor ut tortor facilisis varius sed ultrices neque. Mauris fringilla turpis id arcu condimentum, sed pharetra leo iaculis. Ut nec urna at neque vehicula facilisis non non mi. Pellentesque mattis in augue id pulvinar.
<br/><br/>
Praesent faucibus neque non tellus pretium facilisis. Phasellus sit amet tellus vitae magna eleifend finibus. Sed dictum eget tellus et malesuada. Nullam pulvinar viverra enim a malesuada. Donec convallis a leo non tempus. Ut id ante sit amet sapien porttitor ultricies. Duis maximus purus magna, ut pretium magna semper nec.
<br/><br/>
Pellentesque egestas eget velit in congue. Aliquam non tempus elit. Vivamus eget diam non tortor imperdiet posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lobortis est. Proin id accumsan lorem, nec rhoncus nisl. Suspendisse hendrerit consectetur lacinia.
<br/><br/>
In hac habitasse platea dictumst. In eu molestie diam. Morbi eget egestas nisl. Sed non velit augue. Nulla suscipit libero a porta lacinia. Vivamus eu ipsum euismod, congue ex eget, suscipit nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pharetra luctus est nec scelerisque. Aliquam tempor neque at odio hendrerit, ut pharetra nisl luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vel felis aliquet, scelerisque magna et, maximus mauris.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget gravida elit. Suspendisse facilisis rutrum aliquet. Vivamus tincidunt, lectus ut bibendum feugiat, libero turpis dapibus dolor, condimentum tristique elit tortor et eros. Aenean aliquam ut erat nec mollis. Mauris molestie ante cursus, condimentum est vitae, pellentesque felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque porta purus condimentum velit sodales egestas. Donec nunc dolor, blandit vitae magna sed, dictum lacinia turpis. Integer nec congue neque. Duis sed dolor condimentum leo auctor tincidunt. Morbi massa purus, viverra quis metus at, rutrum sodales neque. Integer vel arcu est. Ut sit amet dignissim tortor. Sed id mauris et ligula ultricies eleifend vel nec erat. In suscipit purus sit amet molestie vehicula. Cras porta libero in risus faucibus viverra et eu nisl.
<br/><br/>
Nam feugiat accumsan turpis, at finibus leo volutpat dictum. Vivamus tincidunt nisi vel interdum finibus. Nulla ac faucibus quam. In iaculis ornare odio lacinia cursus. Sed ornare gravida ornare. Pellentesque ac dolor ut tortor facilisis varius sed ultrices neque. Mauris fringilla turpis id arcu condimentum, sed pharetra leo iaculis. Ut nec urna at neque vehicula facilisis non non mi. Pellentesque mattis in augue id pulvinar.
<br/><br/>
Praesent faucibus neque non tellus pretium facilisis. Phasellus sit amet tellus vitae magna eleifend finibus. Sed dictum eget tellus et malesuada. Nullam pulvinar viverra enim a malesuada. Donec convallis a leo non tempus. Ut id ante sit amet sapien porttitor ultricies. Duis maximus purus magna, ut pretium magna semper nec.
<br/><br/>
Pellentesque egestas eget velit in congue. Aliquam non tempus elit. Vivamus eget diam non tortor imperdiet posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis lobortis est. Proin id accumsan lorem, nec rhoncus nisl. Suspendisse hendrerit consectetur lacinia.
<br/><br/>
In hac habitasse platea dictumst. In eu molestie diam. Morbi eget egestas nisl. Sed non velit augue. Nulla suscipit libero a porta lacinia. Vivamus eu ipsum euismod, congue ex eget, suscipit nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc pharetra luctus est nec scelerisque. Aliquam tempor neque at odio hendrerit, ut pharetra nisl luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In vel felis aliquet, scelerisque magna et, maximus mauris.
<br/><br/>
`;

// Crear el texto
const body = document.querySelector('body');
body.append(texto);

// Crear el progressbar
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// TODO Funcion calculo scroll
const calcularPorcentajeScroll = (event) => {
    // Destructuracion del event
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;
    //console.log({ scrollTop, scrollHeight, clientHeight });
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Observable del scroll
const scrolls = fromEvent(document, 'scroll');

const progress$ = scrolls.pipe(
    //map(event => calcularPorcentajeScroll(event))
    map(calcularPorcentajeScroll),
    tap(console.log)
);

// Asigna el porcentaje calculado al Style
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
