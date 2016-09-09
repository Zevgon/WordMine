class Api::NodesController < ApplicationController
  def show
    @node = Node.find(params[:node][:id])
  end

  def update
    node = Node.find(node_params[:id])
    node.update({completed: true})
    if node.child
      node.child.update!({unlocked: true})
    end
    @tree = Tree.find(node.tree_id)
    @nodes = Node.where({tree_id: node.tree_id, user_id: current_user.id}).sort_by{|node| node.id}
    render 'api/trees/show.json.jbuilder'
  end

  private
  def node_params
    params.require(:node).permit(:id)
  end
end
