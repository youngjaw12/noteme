Rails.application.routes.draw do


  devise_for :users, controller: { 
    registrations: "users/registrations",
    sessions: "users/sessions",
    passwords: "users/passwords",
    confirmations: "users/confirmations"
   }
   devise_scope :user do
    get "signup", to: "users/registrations#new"
    get "signin", to: "users/sessions#new"
    get "signout", to: "users/sessions#destroy"
   end
  
  
 root "home#index"
  resources :notes
  get "dashboard", to: "dashboard#index"
 
 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
