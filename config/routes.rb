Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :trees, only: [:index, :show]
    get '/choices', to: 'trees#choices'
    resources :nodes, only: [:show, :update]
    resources :trees_users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
end
