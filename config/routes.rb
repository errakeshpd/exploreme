Rails.application.routes.draw do

  devise_for :users
  #main site
  root 'site#index'
  get '/features', to: "site#features"

  #profile management
  get '/profile', to: "profile#index"
  
  #CV pages
  
end
