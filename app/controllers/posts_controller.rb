class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.html
      format.json {render json: @posts.to_json}
    end
  end

  def create 
    @post = Post.new(title: params[:post][:title], content: params[:post][:content])

    respond_to do |format|
      if @post.save
        format.json {render json: @post.to_json}
      end
    end
  end

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json {render json: @post.to_json}
    end
  end

  def destroy
    @post = Post.find(params[:id])
    #@post.destroy
    respond_to do |format|
      format.json {render json: @post.to_json}
    end
  end
end

