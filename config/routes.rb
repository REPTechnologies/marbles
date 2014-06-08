Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  scope 'api' do
    api_version(:module => "V1", :path => {:value => "v1"}, defaults: { format: :json }) do
      resources :packages, :except => [:new, :edit]
      resources :organizations, :except => [:new, :edit]
      resources :events, :except => [:new, :edit]
      resources :pictures, :except => [:new, :edit]
      get '/tags', to: 'tags#index'
    end
  end

  devise_for :users, path_names: {sign_in: "log_in", sign_out: "log_out"}

  # You can have the root of your site routed with "root"
  root 'home#index'

  get '*path' => 'home#index'

end
