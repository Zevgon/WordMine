class Api::TreesUsersController < ApplicationController
  def create
    tree_id = params[:trees_users][:tree_id]
    @tree_user = TreesUser.new({user_id: current_user.id, tree_id: tree_id})
    @nodes = []
    tree_id = trees_users_params[:tree_id]
    word_lists = Tree.find(tree_id).word_lists
    word_lists.each_with_index do |word_list, idx|
      unlocked_status = idx == 0 ? true : false
      new_node = Node.create!({word_list_id: word_list.id,
                               title: word_list.title,
                               tree_id: tree_id,
                               user_id: current_user.id,
                               unlocked: unlocked_status
      })
      if idx != word_lists.length - 1
        new_node_child_id = new_node.id + 1
        new_node.update!({child_id: new_node_child_id})
      end
      @nodes << new_node
    end
    @tree = Tree.find(tree_id)
    if @tree_user.save
      render :show
    else
      render json: {errors: "nope!"}
    end
  end

  private
  def trees_users_params
    params.require(:trees_users).permit(:tree_id)
  end
end
