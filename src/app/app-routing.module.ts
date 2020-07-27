import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'add-review', loadChildren: './add-review/add-review.module#AddReviewPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'currency-list', loadChildren: './currency-list/currency-list.module#CurrencyListPageModule' },
  { path: 'downloads', loadChildren: './downloads/downloads.module#DownloadsPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'language', loadChildren: './language/language.module#LanguagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule' },
  { path: 'my-orders', loadChildren: './my-orders/my-orders.module#MyOrdersPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-detail', loadChildren: './news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'news-list', loadChildren: './news-list/news-list.module#NewsListPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'order-detail', loadChildren: './order-detail/order-detail.module#OrderDetailPageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'product-detail', loadChildren: './product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'products', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'refund-policy', loadChildren: './refund-policy/refund-policy.module#RefundPolicyPageModule' },
  { path: 'reviews', loadChildren: './reviews/reviews.module#ReviewsPageModule' },
  { path: 'reward-points', loadChildren: './reward-points/reward-points.module#RewardPointsPageModule' },
  { path: 'scratch-card', loadChildren: './scratch-card/scratch-card.module#ScratchCardPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'select-country', loadChildren: './select-country/select-country.module#SelectCountryPageModule' },
  { path: 'select-zones', loadChildren: './select-zones/select-zones.module#SelectZonesPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'shipping-method', loadChildren: './shipping-method/shipping-method.module#ShippingMethodPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'term-services', loadChildren: './term-services/term-services.module#TermServicesPageModule' },
  { path: 'thank-you', loadChildren: './thank-you/thank-you.module#ThankYouPageModule' },
  { path: 'wish-list', loadChildren: './wish-list/wish-list.module#WishListPageModule' },
  { path: 'addresses', loadChildren: './address-pages/addresses/addresses.module#AddressesPageModule' },
  { path: 'billing-address', loadChildren: './address-pages/billing-address/billing-address.module#BillingAddressPageModule' },
  { path: 'shipping-address', loadChildren: './address-pages/shipping-address/shipping-address.module#ShippingAddressPageModule' },
  { path: 'categories', loadChildren: './categorie-pages/categories/categories.module#CategoriesPageModule' },
  { path: 'categories2', loadChildren: './categorie-pages/categories2/categories2.module#Categories2PageModule' },
  { path: 'categories3', loadChildren: './categorie-pages/categories3/categories3.module#Categories3PageModule' },
  { path: 'categories4', loadChildren: './categorie-pages/categories4/categories4.module#Categories4PageModule' },
  { path: 'categories5', loadChildren: './categorie-pages/categories5/categories5.module#Categories5PageModule' },
  { path: 'categories6', loadChildren: './categorie-pages/categories6/categories6.module#Categories6PageModule' },
  { path: 'sub-categories', loadChildren: './categorie-pages/sub-categories/sub-categories.module#SubCategoriesPageModule' },
  { path: 'sub-categories2', loadChildren: './categorie-pages/sub-categories2/sub-categories2.module#SubCategories2PageModule' },
  { path: 'sub-categories3', loadChildren: './categorie-pages/sub-categories3/sub-categories3.module#SubCategories3PageModule' },
  { path: 'sub-categories4', loadChildren: './categorie-pages/sub-categories4/sub-categories4.module#SubCategories4PageModule' },
  { path: 'sub-categories5', loadChildren: './categorie-pages/sub-categories5/sub-categories5.module#SubCategories5PageModule' },
  { path: 'sub-categories6', loadChildren: './categorie-pages/sub-categories6/sub-categories6.module#SubCategories6PageModule' },
  { path: 'home', loadChildren: './home-pages/home/home.module#HomePageModule' },
  { path: 'home2', loadChildren: './home-pages/home2/home2.module#Home2PageModule' },
  { path: 'home3', loadChildren: './home-pages/home3/home3.module#Home3PageModule' },
  { path: 'home4', loadChildren: './home-pages/home4/home4.module#Home4PageModule' },
  { path: 'home5', loadChildren: './home-pages/home5/home5.module#Home5PageModule' },
  { path: 'home6', loadChildren: './home-pages/home6/home6.module#Home6PageModule' },
  { path: 'home7', loadChildren: './home-pages/home7/home7.module#Home7PageModule' },
  { path: 'home8', loadChildren: './home-pages/home8/home8.module#Home8PageModule' },
  { path: 'home9', loadChildren: './home-pages/home9/home9.module#Home9PageModule' },
  { path: 'home10', loadChildren: './home-pages/home10/home10.module#Home10PageModule' },
  { path: 'color-theme', loadChildren: './color-theme/color-theme.module#ColorThemePageModule' },
  { path: 'blank-modal', loadChildren: './blank-modal/blank-modal.module#BlankModalPageModule' },  {
    path: 'home3',
    loadChildren: () => import('./home-pages/home3/home3.module').then( m => m.Home3PageModule)
  },
  {
    path: 'home4',
    loadChildren: () => import('./home-pages/home4/home4.module').then( m => m.Home4PageModule)
  },
  {
    path: 'home5',
    loadChildren: () => import('./home-pages/home5/home5.module').then( m => m.Home5PageModule)
  },
  {
    path: 'home6',
    loadChildren: () => import('./home-pages/home6/home6.module').then( m => m.Home6PageModule)
  },
  {
    path: 'home7',
    loadChildren: () => import('./home-pages/home7/home7.module').then( m => m.Home7PageModule)
  },
  {
    path: 'home8',
    loadChildren: () => import('./home-pages/home8/home8.module').then( m => m.Home8PageModule)
  },
  {
    path: 'home9',
    loadChildren: () => import('./home-pages/home9/home9.module').then( m => m.Home9PageModule)
  },
  {
    path: 'home10',
    loadChildren: () => import('./home-pages/home10/home10.module').then( m => m.Home10PageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./app/about-us/about-us/about-us.module').then( m => m.AboutUsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
