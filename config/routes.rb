Marbles::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  scope 'api' do
    resources :packages

    resources :organizations

    resources :events
  end

  devise_for :users

  # You can have the root of your site routed with "root"
  root 'home#index'

  get '*path' => 'home#index'

end
