Rails.application.routes.draw do
  get 'comments/index'
  root 'root#index'
  get 'posts', to: 'posts#index'
  get 'posts/:id', to: 'posts#show'
  get 'users', to: 'users#index'
  get 'users/:id', to: 'users#show'
  get 'comments', to: 'comments#index'
end