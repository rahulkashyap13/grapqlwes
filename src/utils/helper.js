export const commonLogoutFunc = ( history ) => {
    localStorage.removeItem( 'token' );
    return history.push( '/login' )
}