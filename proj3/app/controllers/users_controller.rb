class UsersController < AppUsersController
    def index
        users = User.all

        render json: UserSerializer.new(users).serialized_json
    end

    def show #params[:id] should have the id value passed in
        user = User.find_by(iduser: params[:iduser])

        render json: UserSerializer.new(user, options).serialized_json
    end

    def create
        user = User.new(user_params)

        if user.save
            render json: UserSerializer.new(user).serialized_json
        else
            render json: {error: user.errors.messages }, status: 422
        end
    end

    def update
        user = User.find_by(iduser: params[:iduser])

        if user.update
            render json: UserSerializer.new(user, options).serialized_json
        else
            render json: {error: user.errors.messages }, status: 422
        end
    end

    def destroy #when destroying a user, need to destroy all comments and posts with that user
        user = User.find_by(iduser: params[:iduser])

        if user.destroy
            head :no_content
        else
            render json: {error: user.errors.messages }, status: 422
        end
    end

    private

    def user_params
        params.require(user).permit(:iduser, :nickname)
    end

    def options
        @options ||= {include: %i[posts]}
    end
end