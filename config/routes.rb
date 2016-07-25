Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :listings
    resources :boards
    resources :textboxes
    resources :photoboxes
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
