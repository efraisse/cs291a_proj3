Rails.application.routes.draw do
  get 'comments/index'
  root 'root#index'
  get 'posts', to: 'posts#index'
  get 'posts/:id', to: 'posts#show'
  get 'users', to: 'users#index'
  get 'users/:id', to: 'users#show'
  get 'comments', to: 'comments#index'
  get 'comments/:id', to: 'comments#show'

  get 'comments/:id/edit', to: 'comments#edit'
  get 'users/:id/edit', to: 'users#edit'
  get 'posts/:id/edit', to: 'posts#edit'

  post 'comments', to: 'comments#create'
  post 'users', to: 'users#create'
  post 'posts', to: 'posts#create'

  patch 'comments/:id', to: 'comments#update'
  patch 'users/:id', to: 'users#update'
  patch 'posts/:id', to: 'posts#update'

  delete 'comments/:id', to: 'comments#destroy'
  delete 'users/:id', to: 'users#destroy'
  delete 'posts/:id', to: 'posts#destroy'
end