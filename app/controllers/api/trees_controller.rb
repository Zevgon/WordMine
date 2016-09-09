class Api::TreesController < ApplicationController
  def show
    @tree = Tree.find(params[:id])
    if current_user
      @nodes = Node.where({tree_id: tree_params[:id], user_id: current_user.id}).sort_by{|node| node.id}
    end
  end

  def index
    @trees = User.find(params[:tree][:user_id]).trees.to_a
  end

  def choices
    if current_user
      @language_choices = Tree.all - current_user.trees
    end
  end

  private
  def tree_params
    params.require(:tree).permit(:id, :user_id)
  end
end
