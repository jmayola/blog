import { AppHeader } from '@/components/app-header';
import Footer from '@/components/Footer';
import ImageCarrousel, {ImageCarrouselItem} from '@/components/image-carrousel';
import { Head } from '@inertiajs/react';
import { animate, splitText, stagger, type Scope } from 'animejs';
import { useEffect, useRef, useState } from 'react';
    
const Images: ImageCarrouselItem[] = [{
    title: "Arbol y monumental",
    src: "images/nature/1.jpg"
},{
    title: "la rioja 1",
    src: "images/nature/2.jpg"
},{
    title: "villa castelli rio",
    src: "images/nature/3.jpg"
},{
    title: "cerro del toro la rioja",
    src: "images/nature/4.jpg"
},{
    title: "viviendas del cerro del toro",
    src: "images/nature/5.jpg"
},{
    title: "vinhedos de mendoza",
    src: "images/nature/6.jpg"
},{
    title: "cruce de libertadores mendoza",
    src: "images/nature/7.jpg"
},{
    title: "puente del inca mendoza",
    src: "images/nature/8.jpg"
},,{
    title: "las cuevas mendoza casi chile",
    src: "images/nature/9.jpg"
}]
export default function Welcome() {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const scopeRef = useRef<Scope | null>(null);
    const [rotations, setRotations] = useState(0);

    useEffect(() => {
        const rootEl = rootRef.current;
        if (!rootEl) return;

        splitText('#welcome', {
            chars: { wrap: 'clip' },
        }).addEffect(({ chars }) =>
            animate(chars, {
                y: [{ to: ['100%', '0%'] }],
                duration: 750,
                ease: 'out(4)',
                loop: false,
                delay: stagger(200),
                loopDelay: 500,
            }),
        );

        splitText('#mayola', {
            words: { wrap: 'visible' },
        }).addEffect(({ words }) =>
            animate(words, {
                y: [{ to: ['100%', '0%'] }],
                duration: 750,
                ease: 'out(4)',
                loop: false,
                delay: stagger(200),
                loopDelay: 500,
            }),
        );
    }, []);
    return (
        <div className='max-h-screen'>
            <Head title="Bienvenido! - Mayola's Blog">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <AppHeader />
            <div
                ref={rootRef}
                id="base"
                className="w-screen text-left grid grid-cols-2 place-content-around place-items-center"
            >
              <div className='flex flex-col place-content-center'>
                <span id="welcome" className="p-2 text-8xl font-extrabold">
                    Welcome
                </span>
                <span id="mayola" className="p-10 ml-3 xl:text-7xl lg:text-3xl">
                    to Mayola's Blog!
                </span>
                </div>
                <ImageCarrousel items={Images}></ImageCarrousel>
            </div>
            <Footer/>
        </div>
    );
}
