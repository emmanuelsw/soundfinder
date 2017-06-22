Rails.application.routes.draw do
  get 'dashboard/index'

  devise_for :users
  root 'welcome#index'
  get 'dashboard', to: 'dashboard#index'
end
