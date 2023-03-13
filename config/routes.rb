Rails.application.routes.draw do

  resources :comments
  resources :posts, only: [:index, :show, :create, :destroy]
  get '/posts/:id/comments', to: 'posts#comments'

  post "/signup", to: "students#create"
  get "/me", to: "students#show"
  get "/students", to: "students#index"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
