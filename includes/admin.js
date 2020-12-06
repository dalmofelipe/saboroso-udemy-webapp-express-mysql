module.exports = {

  getMenus(req) {
    const menus = [
      {
        text: 'Tela inicial',
        icon: 'home',
        href: '/admin/',
        active: false
      },{
        text: 'Menu',
        icon: 'cutlery',
        href: '/admin/menus',
        active: false
      },{
        text: 'Reservas',
        icon: 'calendar-check-o',
        href: '/admin/reservations',
        active: false
      },{
        text: 'Contatos',
        icon: 'comments',
        href: '/admin/contacts',
        active: false
      },{
        text: 'Usuários',
        icon: 'users',
        href: '/admin/users',
        active: false
      },{
        text: 'E-mails',
        icon: 'envelope',
        href: '/admin/emails',
        active: false
      },
    ]

    menus.map(menu => {
      if(menu.href === `/admin${req.url}`) menu.active = true
    })

    return menus
  }
}