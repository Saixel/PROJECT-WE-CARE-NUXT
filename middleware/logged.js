export default function (context) {
  if (context.$auth.$state.loggedIn) {
    context.redirect('/')
  }
}
