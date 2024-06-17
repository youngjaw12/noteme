Rails.application.routes.draw do
  get "dashboard", to: "dashboard#index"
  devise_for :users
  
 root "home#index"
  resources :notes

 
 

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
