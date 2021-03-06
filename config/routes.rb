Rails.application.routes.draw do
  
  resources :visitors, only: [:index, :show, :create, :update, :destroy]
  resources :islands, only: [:index, :show, :create, :update, :destroy]
  resources :villagers, only: [:index, :show, :create, :update, :destroy]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/reset", to: "passwords#reset"

  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
