let initialState = {
        advs: [
            {id: 1, text: 'Disney уже окупил свои инвестиции от покупки LucasFilms за 4 млрд долларов шесть лет назад, заработав при этом более 4,8 млн долларов кассовых сборов.'}
        ]
};

const asideReducer = (state = initialState, action) => {
    return state;
}

export default asideReducer;