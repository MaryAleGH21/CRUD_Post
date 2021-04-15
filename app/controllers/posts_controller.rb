class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.html
      format.json {render json: @posts.to_json}
    end
  end
end

