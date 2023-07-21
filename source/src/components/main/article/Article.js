import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import './article.scss';

import winterImg from '../../../resources/images/winter.webp';
import summerImg from '../../../resources/images/summer.webp';
import springImg from '../../../resources/images/spring.webp';
import autumnImg from '../../../resources/images/autumn.webp';

let listItem = {
    winter: {
        name: 'Зима',
        picture: winterImg,
        text: ['Временной промежуток:  с 1 декабря по 29(28) февраля.',
        'Основной признак этого времени года — устойчивая низкая температура (ниже 0 градусов по Цельсию) во многих районах Земли, на поверхность земли выпадает и ложится снег.',
        'Календарная зима состоит из трёх месяцев: в Северном полушарии это декабрь, январь и февраль, в Южном — июнь, июль и август. Привязка начала зимы к солнцестоянию закреплена в традициях рождественско-новогодних праздников и их языческих аналогов, которые на Руси называли Святками. До XVIII века в Московском государстве зима считалась длящейся от Рождества Христова (25 декабря) до Благовещения (25 марта). В каждом времени года, как считалось, было по 91 дню и по полчетверти часа.',
        'Продолжительность зимы как климатического сезона с наиболее низкими для данной территории температурами воздуха отличается в зависимости от географической широты, расстояния Земли от Солнца, количества осадков, близости к океаническим течениям и т. д. Чем ближе к экватору географическая широта, тем короче зима. В субтропических широтах зима продолжается 1-2 месяцев, в умеренных — 3-4, в полярных — 6-7 и более месяцев, а в тропических широтах зимы в этом понимании не бывает.'
        ],
        link: {
            text: 'https://ru.wikipedia.org/wiki/%D0%97%D0%B8%D0%BC%D0%B0',
            img: 'https://ru.freepik.com/free-photo/river-surrounded-by-trees-covered-in-snow-during-winter_12152350.htm#query=%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0&position=5&from_view=search&track=sph',
        }
    },

    spring: {
        name: 'Весна',
        picture: springImg,
        text: ['Временной промежуток:  с 1 марта по 31 мая.', 
        'Существуют различные методы определения начала и окончания весны, отличающиеся в зависимости от местного климата, культур и обычаев. Когда в Северном полушарии весна, то в Южном полушарии осень и наоборот.',
        'Весна — переходный сезон, когда заметно увеличение светового дня, повышается температура окружающей среды и активизируется природная деятельность живых существ и растений.',
        'В России метеорологическая весна считается наступившей, когда среднесуточная температура начинает превышать 0 °С. В южных районах России осень сливается с весной (субтропический климат, климатической зимы нет). В средней полосе России весна наступает климатически в среднем в конце марта. В районах с холодным климатом весна тоже сливается с осенью (нет климатического лета, субарктический климат).'
        ],
        link: {
            text: 'https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%81%D0%BD%D0%B0',
            img: 'https://ru.freepik.com/free-photo/cute-white-snowdrop-flowers-in-a-snowy-ground-the-start-of-a-spring_10376205.htm#query=%D0%B2%D0%B5%D1%81%D0%BD%D0%B0&position=45&from_view=search&track=sph?log-in=google'
        }
    },

    summer: {
        name: 'Лето',
        picture: summerImg,
        text: ['Временной промежуток:  с 1 июня по 31 августа.',
        'Лето — одно из четырёх времён года, между весной и осенью, характеризующееся наиболее высокой температурой окружающей среды. В день летнего солнцестояния дни самые длинные, а ночи самые короткие. Также в большей части стран лето выступает как самые большие каникулы.',
        'С астрономической точки зрения равноденствия и солнцестояния были бы серединой соответствующих сезонов. Сезонные изменения на поверхности Земли обусловлены годичным периодом обращения планеты вокруг Солнца и наклоном оси её вращения относительно орбитальной плоскости.',
        'Согласно метеорологическому соглашению, лето включает июнь, июль и август в северном полушарии и декабрь, январь и февраль в южном полушарии. Согласно метеорологическим определениям, все времена года могут произвольно начинаться в начале календарного месяца и заканчиваться в конце месяца. Это метеорологическое определение лета также соответствует общепринятому представлению о лете как о сезоне с самыми длинными (и самыми теплыми) днями года, в которых преобладает дневной свет.',
        ],
        link: {
            text: 'https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%82%D0%BE',
            img: 'https://ru.freepik.com/free-photo/river-surrounded-by-forests-under-a-cloudy-sky-in-thuringia-in-germany_13291760.htm#query=%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0&position=1&from_view=search&track=sph',
        }
    },

    autumn: {
        name: 'Осень',
        picture: autumnImg,
        text: ['Временной промежуток:  с 1 сентября по 31 ноября.',
        'Осень — переходный сезон, когда заметно уменьшение светового дня, и постепенно понижается температура окружающей среды.',
        'В России принято считать, что осень начинается 1 сентября, то есть, время осени по умолчанию совпадает с календарной осенью. В Северной Америке по умолчанию осень совпадает с астрономической осенью. До XVIII века в Русском государстве осень (есень) продолжалась от 23 сентября до Рождества Христова — то есть до 25 декабря. В каждом времени года считалось по 91 дню и по полчетверти часа.',
        'В 1348 году состоялся Собор в Москве, на котором положено начинать год с сентября, а не с марта. С XV века новый год начинался 1 сентября, сведения о праздновании Нового года появляются с конца XV века. «Парижский словарь московитов» (XVI век) сохранил русское название новогоднего праздника: Первый день во году.'
        ],
        link: {
            text: 'https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D0%B5%D0%BD%D1%8C',
            img: 'https://ru.freepik.com/free-photo/autumn-scenery_1254316.htm#query=%D0%BE%D1%81%D0%B5%D0%BD%D1%8C&position=0&from_view=search&track=sph',
        }
    },
}

function Article({seasons}){
    return (
        <article className='main__article'>

            <section className='main__article__image'>
                <img src={listItem[seasons].picture} className='main__article__image__img'/>
                <span className='main__article__label'><a href={listItem[seasons].link.img} target='_blank'>Автор изображения</a></span>
            </section>

            <header className='main__article__header'>
                <h2 className='main__article__header__title'>{listItem[seasons].name}</h2>
            </header>

            <section className='main__article__paragraf'>
                {listItem[seasons].text.map((item, index) => <Paragraf text={item} key={seasons + String(index)} />)}
                <span className='main__article__label'><a href={listItem[seasons].link.text} target='_blank'>Источник текста</a></span>
            </section>

        </article>
    )
}

function Paragraf({text}){
    return (
        <p className='main__article__paragraf__text'>{text}</p>
    )
}

Article.propTypes = {
    seasons: PropTypes.string,
}

Article.defaultProps = {
    seasons: 'winter',
}

Paragraf.propTypes = {
    text: PropTypes.string,
}

Paragraf.defaultProps = {
    text: 'Paragraf',
}

export default Article;