Rails.application.routes.draw do
  devise_for :users
  root 'welcome#index'
  resources :sounds
  get 'dashboard', to: 'dashboard#index'
end
