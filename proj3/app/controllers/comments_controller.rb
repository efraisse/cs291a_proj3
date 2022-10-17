class CommentsController < ApplicationController
    def index
        comments = Comment.all

        render json: CommentSerializer.new(comments).serialized_json
    end

    def show
        comment = Comment.find_by(idcomment: params[:id])

        if comment
            render json: CommentSerializer.new(comment).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def create
        comment = Comment.new(comment_params)

        if comment.save
            render json: CommentSerializer.new(comment).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def edit
        comment = Comment.find_by(idcomment: params[:id])

        if comment
            render json: CommentSerializer.new(comment).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def update
        comment = Comment.find_by(idcomment: params[:id])

        if comment.update(comment_params)
            render json: CommentSerializer.new(comment).serialized_json
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    def destroy
        comment = Comment.find_by(idcomment: params[:id])

        if comment.destroy
            head :no_content
        else
            raise ActionController::RoutingError.new('Not Found'), status: 404
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:idcomment, :text, :user_id, :post_id)
    end
end
