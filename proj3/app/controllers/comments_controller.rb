class CommentsController < AppCommentsController
    def index
        comments = Comment.all

        render json: CommentSerializer.new(comments).serialized_json
    end

    def show #probably don't need a show function but it's here anyways
        comment = Comment.find_by(idcomment: params[:idcomment])

        render json: CommentSerializer.new(comment).serialized_json
    end

    def create
        comment = Comment.new(comment_params)

        if comment.save
            render json: CommentSerializer.new(comment).serialized_json
        else
            render json: {error: comment.errors.messages }, status: 422
        end
    end

    def update
        comment = Comment.find_by(idcomment: params[:idcomment])

        if comment.update
            render json: CommentSerializer.new(comment).serialized_json
        else
            render json: {error: comment.errors.messages }, status: 422
        end
    end

    def destroy
        comment = Comment.find_by(idcomment: params[:idcomment])

        if comment.destroy
            head :no_content
        else
            render json: {error: comment.errors.messages }, status: 422
        end
    end

    private

    def comment_params
        params.require(comment).permit(:idcomment, :text)
    end
end