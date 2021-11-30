import { GET_NEWS, GET_AREAS, PREVIEW, SET_BODY, GET_BANNER, AGREGAR, FILTRAR } from "../actions/constants";
const initialState = {
    news: [],
    backUpNews: [],
    areas: [],
    pagina: false,
    bodyNews: {
        titulo: '', area: '', descripcion: '', imagen: '', autor: '',
        noticia: '<h2>Escriba aquí la noticia</h2><h4>Subtitulo</h4><blockquote><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magni temporibus distinctio commodi delectus dolore cum deserunt corrupti necessitatibus sint eum velit in laudantium blanditiis, reprehenderit quisquam atque omnis quam.</p></blockquote><p>Ejemplo de <i>numeración</i></p><ol><li>Primer <a href="#">enlace</a></li><li>Segunda noticia <strong>importante</strong></li><li>Simple texto</li></ol>'
    },
    banner: [],
    sobras: [],
    popular: [],
};

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_NEWS:
            let noticias = payload.sort((a, b) => a.createdAt - b.createdAt)
            return {
                ...state,
                news: noticias.reverse(),
                popular: noticias.reverse(),
                backUpNews: noticias.reverse()
            }
        case GET_AREAS:
            return {
                ...state,
                areas: payload
            }
        case PREVIEW:
            return {
                ...state,
                pagina: payload
            }
        case SET_BODY:
            return {
                ...state,
                bodyNews: payload
            }
        case GET_BANNER:
            return {
                ...state,
                banner: payload
            }
        case AGREGAR:
            return {
                ...state,
                banner: payload.res,
                sobras: payload.sobra
            }
        case FILTRAR:
            const filtrado = state.backUpNews.filter(el => el.area === payload)
            if (payload === 'Todos') {
                return {
                    ...state,
                    news: state.popular
                }
            } else {
                return {
                    ...state,
                    news: filtrado
                }
            }
        default:
            return state
    }
}

export default reducer;