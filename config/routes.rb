Rails.application.routes.draw do
  # posts#indexをルートパス（ホーム）に指定。
  root to: 'posts#index'

  post 'posts', to: 'posts#create'

end
