Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # resources :comments
  resources :posts, only: [:index]

  get "/me", to: "students#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"



  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
