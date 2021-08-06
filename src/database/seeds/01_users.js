exports.seed = knex => knex('users').insert([ // Inserts seed entries
    {
        username: 'cuong@gmail.com',
        fullname: 'Lee ',
        email: 'Cuong@gmail.com',
        password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa',
        avatar: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg'
    },
    {
        username: 'nhat@gmail.com',
        fullname: 'Lee ',
        email: 'Nhatus@gmail.com',
        password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa',
        avatar: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg'
    },
    {
        username: 'hung@gmail.com',
        fullname: 'Lee ',
        email: 'Hung@gmail.com',
        password: '$2a$10$6UR93QfWPRDjxGEpCSLMTOiEO2A8QmCl9lWxEQr7YTZ/SmqageeKa',
        avatar: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg'
    },
    {
        username: 'ichhoa@gmail.com',
        fullname: 'IH ',
        email: 'ichhoa@gmail.com',
        password: '$2a$10$cuWcGRN8.ecx9a1kO/wUo.H4x1tHHfM/8ZwfPR4YEik1viSqUNxGK',
        avatar: 'https://st.quantrimang.com/photos/image/072015/22/avatar.jpg'
    }
]);
