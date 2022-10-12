class PostsController < AppPostsController
    def index #should also probably display comments associated with the post itself in show
        posts = Post.all

        render json: PostSerializer.new(posts).serialized_json
    end

    def show #params[:id] should have the id value passed in
        post = Post.find_by(idpost: params[:id])

        if post
            render json: PostSerializer.new(post, options).serialized_json
        else
            render json: {error: post.errors.messages }, status: 404
        end
    end

    def create
        post = Post.new(post_params)

        if post.save
            render json: PostSerializer.new(post).serialized_json
        else
            render json: {error: post.errors.messages }, status: 404
        end
    end

    def update
        post = Post.find_by(idpost: params[:id])

        if post.update(post_params)
            render json: PostSerializer.new(post, options).serialized_json
        else
            render json: {error: post.errors.messages }, status: 404
        end
    end

    def destroy #need to destroy all comments associated with this post
        post = Post.find_by(idpost: params[:id])

        if post.destroy
            head :no_content
        else
            render json: {error: post.errors.messages }, status: 404
        end
    end

    private

    def post_params
        params.require(post).permit(:id, :text, :imageurl)
    end

    def options
        @options ||= {include: %i[comments]}
    end
end