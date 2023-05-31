class PostsController < ApplicationController

  def index

    @posts = Post.order(id: "DESC")

  end

  def create
    # 投稿内容をpostに格納。
    post = Post.create(content: params[:content])
    # json:  ...jsonオプション。後に記述されたデータをJSON形式で返信する。
    render json:{ post: post }

  end

end
