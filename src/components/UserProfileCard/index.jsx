import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import { providers, colors } from "../../utils/constants";

const UserProfileCard = ({ user }) => {
  const classes = useStyles();
  const {
    avatar,
    fullName,
    username,
    bio,
    companyName,
    companyWebsiteLink,
    provider,
    email,
    profileLink,
    followers,
    following,
    countryCode,
    followersCount,
    product,
    description,
  } = user || {};

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography
          variant="subtitle1"
          className={classes.provider}
          style={{
            background: colors[provider]
              ? colors[provider].background || "#000"
              : "#000",
            color: colors[provider] ? colors[provider].color || "#fff" : "#fff",
          }}
        >
          {provider}
        </Typography>
        <Avatar className={classes.avatar} src={avatar} />
        <br />
        <Typography variant="h5">{fullName}</Typography>
        {![providers.github, providers.spotify].includes(provider) && (
          <Typography variant="h6">{username}</Typography>
        )}

        <Typography variant="subtitle1">{email}</Typography>

        {bio && <Typography variant="body1">{bio}</Typography>}
        {followers && (
          <Typography variant="subtitle1">Followers - {followers}</Typography>
        )}
        {following && (
          <Typography variant="subtitle1">Following - {following}</Typography>
        )}
        {countryCode && (
          <Typography variant="subtitle1">country - {countryCode}</Typography>
        )}
        {product && (
          <Typography variant="subtitle1">product - {product}</Typography>
        )}
        {followersCount !== undefined && (
          <Typography variant="subtitle1">
            followers - {followersCount}
          </Typography>
        )}
        {description && (
          <Typography variant="subtitle1">{description}</Typography>
        )}
        {profileLink && (
          <Button variant="text" target="_blank" href={profileLink}>
            {username}
          </Button>
        )}
        {companyWebsiteLink && (
          <Button variant="text" target="_blank" href={companyWebsiteLink}>
            {companyName}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
